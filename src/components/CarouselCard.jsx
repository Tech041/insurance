const CarouselCard = ({ name, image }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-inherit rounded-lg shadow-lg pt-4">
      <h1 className="py-2 font-extrabold">{name}</h1>
      <img
        src={image}
        alt="Card Image"
        className="w-3/4 h-70 object-cover rounded-md mb-2"
      />
    </div>
  );
};

export default CarouselCard;
