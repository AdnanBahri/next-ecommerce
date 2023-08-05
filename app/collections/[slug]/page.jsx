const Collection = ({ params }) => {
  console.log(params);
  return (
    <div className="min-h-screen flex items-center justify-center">
      My Post: {params.slug}
    </div>
  );
};

export default Collection;
