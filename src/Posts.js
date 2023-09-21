import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, deletePost, updatePosts } from "./redux/postsSlice";
export default function Posts() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(false);
  const posts = useSelector((state) => state.posts.items);
  const [id, setId] = useState();
  const [updatetitle, setUpdatetitle] = useState("");
  const [updateDesc, setUpdateDesc] = useState("");

  return (
    <div className="center">
      <div className="form">
        <input
          value={title}
          type="text"
          placeholder="Entrer post title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          value={desc}
          type="text"
          placeholder="Entrer post description"
          onChange={(e) => setDesc(e.target.value)}
        />
        <button
          onClick={() => {
            dispatch(
              addPost({ id: posts.length + 1, title: title, description: desc })
            );
            setTitle("");
            setDesc("");
          }}
        >
          {" "}
          Add posts
        </button>
      </div>
      {posts.length > 0
        ? posts.map((post, key) => (
            <div key={key} className="posts">
              <h1>{post.title}</h1>
              <p>{post.description}</p>
              <button
                onClick={() => {
                  setEdit(true);
                  setId(post.id);
                }}
              >
                Edit
              </button>
              <button
                onClick={() => {
                  dispatch(deletePost({ id: post.id }));
                }}
              >
                Delete
              </button>
              {edit && id == post.id && (
                <div>
                  <input
                    onChange={(e) => {
                      setUpdatetitle(e.target.value);
                    }}
                    type="text"
                    placeholder="update title"
                  />
                  <input
                    onChange={(e) => {
                      setUpdateDesc(e.target.value);
                    }}
                    type="text"
                    placeholder="update Desc"
                  />
                  <button
                    onClick={() => {
                      dispatch(
                        updatePosts({
                          id: post.id,
                          title: updatetitle,
                          description: updateDesc,
                        })
                      );
                      setEdit(false);
                    }}
                  >
                    Update
                  </button>
                </div>
              )}
            </div>
          ))
        : "no posts"}
    </div>
  );
}
