function Category ({category}:any) {
    const getBackgroundColor = () => {
        switch (category) {
            case 'VME – Vietnam Manufacture Expo':
                return 'bg-red-700';
            case 'MXV – METALEX Việt Nam':
                return 'bg-orange-500';
            case 'NEV – NEPCON Vietnam':
                return 'bg-blue-700';
            case 'WRV – Waste and Recycling Expo Việt Nam':
                return 'bg-green-500';
            case 'Thông tin chuyên ngành':
                return 'bg-red-700';
            default:
                return 'bg-red-700'; // Default background if category doesn't match
        }
      };
  return (
    <div className={`text-white leading-none font-semibold p-[0.313rem] max-w-fit ${getBackgroundColor()}`}>
        <span>{category}</span>
    </div>
  )
}

export default Category