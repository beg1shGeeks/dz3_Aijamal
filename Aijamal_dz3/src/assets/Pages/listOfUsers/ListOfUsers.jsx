import style from './listOfUsers.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { USERS } from '../../../store/store';

const ListOfUsers = ({ hendelUser }) => {
  const dispatch = useDispatch();
  const dataPosts = useSelector((state) => state);

  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get('https://dummyjson.com/users');
      dispatch({ type: USERS, payload: response.data.users });
    };
    getPost();
  }, []);

  return (
    <div className={style.container}>
      <h2>Пользователи</h2>
      <div className={style.userContainerWraper}>
        {dataPosts &&
          dataPosts.map((user) => (
            <div className={style.userContainer} key={user.id}>
              <img src={user.image} alt="" />
              <div className={style.userInfo}>
                <div>
                  <h3>{user.firstName}</h3>
                  <div>{user.age} лет</div>
                </div>
                <button type="button" onClick={() => hendelUser(user)}>
                  узнать подробней....
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ListOfUsers;
