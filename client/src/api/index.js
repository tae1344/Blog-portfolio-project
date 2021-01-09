import axios from 'axios';


export const createPost = async (postData) => {
  try {
    await axios({
      method: "POST",
      data: postData,
      withCredentials: true,
      url: "http://localhost:5000/api/posts",
    }).then((res) => console.log('postData ::', res.data));
  } catch (error) {
    console.log(error);
  }
}

// post 가져오기
export const getPosts = async () => {
  try {
    return await axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:5000/api/posts",
    });

  } catch (error) {
    console.log(error);
  }
}
// 유저가 작성한 포스트 가져오기
export const getUserPosts = async (user) => {
  try {
    return await axios({
      method: "GET",
      withCredentials: true,
      url: `http://localhost:5000/api/posts/${user}/detail`,
    });

  } catch (error) {
    console.log(error);
  }
}

export const deletePost = async (id) => {
  try {
    await axios({
      method: 'DELETE',
      withCredentials: true,
      url: `http://localhost:5000/api/posts/${id}`,
    }).then((res) => console.log('Delete ::', res.data));
  } catch (error) {
    console.log(error);
  }
}


export const likePost = async (id) => {
  try {
    await axios({
      method: 'PATCH',
      withCredentials: true,
      url: `http://localhost:5000/api/posts/${id}/likePost`,
    }).then((res) => console.log('like ::', res.data));
  } catch (error) {
    console.log(error);
  }
}
