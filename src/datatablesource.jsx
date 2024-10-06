export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "age",
    headerName: "Age",
    width: 100,
  },
  {
    field: "status",
    headerName: "Status",
    width: 160,
    renderCell: (params) => {
      return (
        <span className={`cellWithStatus ${params.row.status}`}>
          {params.row.status}
        </span>
      );
    },
  },
];
export const userRows = [
  {
    id: 1,
    username: "Gagan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "active",
    email: "gagan@gmail.com",
    age: 35,
  },
  {
    id: 2,
    username: "Harshith",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "harshith@gmail.com",
    status: "active",
    age: 42,
  },
  {
    id: 3,
    username: "Ramu",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "ramu@gmail.com",
    status: "pending",
    age: 45,
  },
  {
    id: 4,
    username: "Somu",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "somu@gmail.com",
    status: "active",
    age: 16,
  },
  {
    id: 5,
    username: "Ramesh",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "ramesh@gmail.com",
    status: "not_active",
    age: 22,
  },
  {
    id: 6,
    username: "Surya",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "surya@gmail.com",
    status: "active",
    age: 15,
  },
  {
    id: 7,
    username: "Poorna",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "poorna@gmail.com",
    status: "not_active",
    age: 44,
  },
  {
    id: 8,
    username: "Mahesh",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "mahesh@gmail.com",
    status: "active",
    age: 36,
  },
  {
    id: 9,
    username: "Ram",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "ram@gmail.com",
    status: "pending",
    age: 65,
  },
  {
    id: 10,
    username: "Teja",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "teja@gmail.com",
    status: "active",
    age: 65,
  },
];
