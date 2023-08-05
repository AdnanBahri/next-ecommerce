import MenuItem from "./menu-item";

const menu = [
  {
    label: "ACCESSORIES",
    items: [
      {
        label: "Shoes",
        slug: "shoes",
      },
      {
        label: "roller skates",
        slug: "roller-skates",
      },
      {
        label: "travel accessories",
        slug: "travel-accessories",
      },
    ],
  },
  {
    label: "Clothing",
    items: [
      {
        label: "Shoes",
        slug: "shoes",
      },
      {
        label: "roller skates",
        slug: "roller-skates",
      },
      {
        label: "travel accessories",
        slug: "travel-accessories",
      },
    ],
  },
];

const DesktopMenu = () => {
  return (
    <div className="h-full flex items-center gap-x-4">
      {menu.map((item, index) => (
        <MenuItem label={item.label} items={item.items} key={index} />
      ))}
    </div>
  );
};
export default DesktopMenu;
