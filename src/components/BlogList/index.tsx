import BlogItem from "./BlogItem.tsx";
const BlogList = ({ setDetailid, list, setModalVisiable, setCommentId }) => {
  return (
    <div>
      {list.map((item, index) => {
        return (
          <BlogItem
            key={index}
            setDetailid={setDetailid}
            item={item}
            index={index}
            setModalVisiable={setModalVisiable}
            setCommentId={setCommentId}
          />
        );
      })}
    </div>
  );
};
export default BlogList;
