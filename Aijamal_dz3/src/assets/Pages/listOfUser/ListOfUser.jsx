import { useState } from 'react';
import style from './listOfUser.module.css';
import axios from 'axios';

const ListOfUser = ({ user }) => {
  // хуки для списка дель
  const [userTodos, setUserTodos] = useState();
  let [closeOpenTodos, sercloseOpenTodos] = useState(false);

  const hendelUserTodos = (id) => {
    sercloseOpenTodos((closeOpenTodos = !closeOpenTodos));
    const getTodos = async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${user.id}/todos`
      );
      setUserTodos(response.data);
    };
    getTodos();
  };
  // хуки для поста
  const [userPost, setUserPost] = useState();
  let [closeOpenPost, sercloseOpenPost] = useState(false);

  const hendelUserPost = async (id) => {
    sercloseOpenPost((closeOpenPost = !closeOpenPost));
    const getPosts = async () => {
      const Postresponse = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${user.id}/posts`
      );
      setUserPost(Postresponse.data);
    };
    getPosts();
  };
  return (
    <div className={style.container}>
      <div className={style.avatarContainer}>
        <img src={user.image} alt="" />
        <div className={style.avataritem}>
          <div>
            <span>И: </span>
            {user.firstName}
          </div>
          <div>
            <span> Ф: </span>
            {user.lastName}
          </div>
          <div>
            <span>возрвсть: </span>
            {user.age}
          </div>
          <div>
            <span> пол: </span>
            {user.gender}
          </div>
          <div>{/* <span>город: </span> {user.address.city} */}</div>
          <div>
            <span> Университет: </span>
            {user.university}
          </div>
          <div>
            <span>Email: </span> {user.email}
          </div>
          <div>
            <span> номер: </span>
            {user.phone}
          </div>
        </div>
      </div>
      <div className={style.btnContainer}>
        <span>
          <button type="button" onClick={() => hendelUserTodos(user.id)}>
            Список дел
          </button>
          {closeOpenTodos ? (
            <div>
              <ul>
                {userTodos &&
                  userTodos.map((post) => <li key={post.id}>{post.title}</li>)}
              </ul>
            </div>
          ) : (
            <div></div>
          )}
        </span>
        <span>
          <button type="button" onClick={() => hendelUserPost(user.id)}>
            посты
          </button>
          {closeOpenPost ? (
            userPost &&
            userPost.map((post) => (
              <div key={post.id} className={style.postsContainer}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            ))
          ) : (
            <div></div>
          )}
        </span>
      </div>
    </div>
  );
};

export default ListOfUser;
