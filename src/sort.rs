//implementing various sorting algorithm in rust,do dirt my hands.

fn main() {
    let tar = vec![23, 11, 17, 45, 34, 18, 3, 7];
    let length = tar.len();
    let sorted = bubblesort(&tar, length);
    println!("The sorted array is {:?}", sorted);
    print!("{:?}", tar);
}

fn bubblesort(u: &Vec<i32>, b: usize) -> Vec<i32> {
    let mut ans = u.clone();
    let mut i = 0;
    while i < b {
        let mut j = i + 1;
        while j < b {
            if ans[i] > ans[j] {
                let temp = ans[i];
                ans[i] = ans[j];
                ans[j] = temp;
            }
            j = j + 1;
        }
        i = i + 1;
    }
    return ans;
}
