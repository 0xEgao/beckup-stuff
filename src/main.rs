use std::collections::HashMap;

struct User{
    name:String,
    age:i32,
}

fn main() {
    hashmaps();
    let pairs:Vec<User>=vec![
        User { name: String::from("name"), age: 20 },
        User { name: String::from("age"), age: 20 },
    ];

    converting_vector_to_hashmap(pairs);
}


fn vector(){
    let mut vec=Vec::new();
    vec.push(1);
    vec.push(2);

    //you can print vec directly,it's like a struct , can use debug trait to do so,will se
    println!("{:?}",even_vector(&vec)); 
    // This a debug trait, it's like a interface in java, you can implement it for your struct
    vec_macro();
}

fn vec_macro(){
    let vec=vec![1,2,3,4,5]; 
    //using macro to create a vector
    println!("{:?}",vec);
}


fn create_vector_generic(){
    //creating a generic type vector
    let mut vec:Vec<i32>=Vec::new();

}
fn even_vector(vec: &Vec<i32>)->Vec<i32>{
    let mut new_vec=Vec::new();
    for i in vec{
        if i%2==0{
            new_vec.push(*i);
        }
    }

    return new_vec;
}


//moving to hashmaps

fn hashmaps(){

    //ezy key value pair, like objects in js
   let mut users=HashMap::new();

    users.insert(String::from("name"),"John");
    users.insert(String::from("age"),"20");

    let first_user_age=users.get("age");
    
    match first_user_age{
        Some(age)=>println!("Age is {}",age),
        None=>println!("No age found"),
    }
}


fn converting_vector_to_hashmap(pairs: Vec<User>)-> HashMap<String,i32>{
    let mut map=HashMap::new();
    for user in pairs {
        map.insert(user.name, user.age);
    }
    return map;
    
}

fn using_tuple(pairs:Vec<(String,i32)>)->HashMap<String,i32>{
    let mut map=HashMap::new();
    for (key,value) in pairs{
        map.insert(key,value);
    }
    return map;
}

