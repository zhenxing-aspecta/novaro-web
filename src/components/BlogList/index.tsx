import BlogItem from "./BlogItem.tsx";
const BlogList = ({ setDetailid }) => {
  return (
    <div>
      <BlogItem setDetailid={setDetailid} />
    </div>
  );
};
export default BlogList;
