//psql joins relationships
//1. Inner Join
//2. Left Join
//3. Right Join
//4,full join


//inner join
//select * from userss inner join addresses on userss.id = addresses.user_id;
//inser join will return only the rows which have matching values in both the tables


//left join
//select * from userss left join addresses on userss.id = addresses.user_id;
//left join will return all the rows from the left table and the matched rows from the right table


//right join
//select * from userss right join addresses on userss.id = addresses.user_id;
//right join will return all the rows from the right table and the matched rows from the left table

//full join
//select * from userss full join addresses on userss.id = addresses.user_id;
//full join will return all the rows from both the tables