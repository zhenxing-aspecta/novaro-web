import FollowList from "../../components/FollowList";
import BlogList from "../../components/BlogList";
import "./index.less";
import { Input, Avatar } from "@web3uikit/core";
import { Search } from "@web3uikit/icons";
import post1 from "../../assets/blog/post1.svg";
import post2 from "../../assets/blog/post2.svg";
import post3 from "../../assets/blog/post3.svg";
import post4 from "../../assets/blog/post4.svg";
import { useState } from "react";
import BlogItem from "../../components/BlogList/BlogItem";

const HomePage = () => {
  const [detailid, setDetailid] = useState("");
  const postList = [
    { img: post1 },
    { img: post2 },
    { img: post3 },
    { img: post4 },
  ];
  const godetail = () => {
    setDetailid("");
  };
  return (
    <div className="home-container">
      {detailid ? (
        <div className="home-left">
          <div className="back" onClick={godetail}>
            <p>{"<"}</p>
            <p>{"back"}</p>
          </div>
          <BlogItem showIcon={false} />
          <div className="detailComment">
            <BlogItem showIcon={false} showFollow={false} isComment={true} />
          </div>
        </div>
      ) : (
        <div className="home-left">
          <div className="home-left-top">
            <div>Home</div>
            <Input
              style={{
                height: "40px",
                background: "#f7f7f7", // A2A5B1
                outline: "none",
              }}
              placeholder="Search or type a command"
              width="323px"
              prefixIcon={<Search style={{ color: "#A2A5B1" }} />}
              name="Test text Input"
              onBlur={function noRefCheck() {}}
              onChange={function noRefCheck() {}}
            />
          </div>
          <div className="postContent">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Avatar isRounded theme="image" />
              <div className="post">
                <input type="text" placeholder="what is happening？" />
                <div className="button"> + Post</div>
              </div>
            </div>

            <div className="postList">
              {postList.map((item, index) => {
                return (
                  <div key={index}>
                    <img src={item.img} className="listItem" />
                  </div>
                );
              })}
            </div>
          </div>
          <BlogList setDetailid={setDetailid} />
        </div>
      )}

      <div className="home-right">
        <div className="home-right-title">Suggested Follows</div>
        <FollowList />
      </div>
    </div>
  );
};
export default HomePage;
