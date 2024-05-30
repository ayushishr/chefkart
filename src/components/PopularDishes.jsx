function PopularDishes({ item, index }) {
  return (
    <div
      key={index}
      className="rounded-full relative"
      style={{ height: 80, width: 80 }}
    >
      <img
        src={item.image}
        alt={item.title}
        className="bg-gray-400 object-cover rounded-full"
        style={{ height: 80, width: 80 }}
      />
      <div className="absolute bottom-0 w-full h-full flex items-center justify-center rounded-full bg-black bg-opacity-50 text-white text-xs text-center p-2 rounded-b-full">
        <p>{item.title}</p>
      </div>
    </div>
  );
}

export default PopularDishes;
