import { Avatar } from "@web3uikit/core";
import "./index.less";
import blog1 from "../../assets/blog/blog1.svg";
import blog2 from "../../assets/blog/blog2.svg";
import blog3 from "../../assets/blog/blog3.svg";
import blog4 from "../../assets/blog/blog4.svg";
import blog5 from "../../assets/blog/blog5.svg";
import comment1 from "../../assets/blog/comment1.svg";
import comment2 from "../../assets/blog/comment2.svg";
import comment3 from "../../assets/blog/comment3.svg";

const BlogItem = ({
  showIcon = true,
  showFollow = true,
  isComment = false,
  setDetailid = (id: string) => {},
}) => {
  const godetail = (id: string) => {
    if (setDetailid) {
      setDetailid(id);
    }
  };
  const iconList = [
    { img: blog1, count: 100 },
    { img: blog2, count: 100 },
    { img: blog3, count: 100 },
    { img: blog4, count: 100 },
    { img: blog5, count: 100 },
  ];
  const commentList = [
    { img: comment1, count: 100 },
    { img: comment2, count: 100 },
    { img: comment3, count: 100 },
  ];
  return (
    <div className="item">
      <div className="header">
        <div className="avatar">
          <Avatar isRounded theme="image" />
        </div>

        <div className="detail">
          <div className="name">
            <div>Alan Tsang</div>
            <div className="date">12 Apr at 09:28 pm</div>
          </div>
          {showFollow && <div className="follow">Follow</div>}
        </div>
      </div>
      <div
        className="content"
        style={{ marginLeft: isComment ? "50px" : 0 }}
        onClick={() => godetail("1")}
      >
        Please note that some processing of your personal data may not require
        your consent, but you have a right to object to such processing
        😍😍😍...
      </div>
      {showIcon && (
        <div className="iconList">
          {iconList.map((item, index) => {
            return (
              <div key={index} className="iconItem">
                <img src={item.img} className="icon" />
                <div>{item.count}</div>
              </div>
            );
          })}
        </div>
      )}

      <div
        className="commentList"
        style={{ marginLeft: isComment ? "50px" : 0 }}
      >
        {commentList.map((item, index) => {
          return (
            <div key={index} className="commentItem">
              <img src={item.img} className="commentIcon" />
              <div>{item.count}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default BlogItem;
