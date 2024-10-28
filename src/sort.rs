fn main() {
    let mut tar = vec![23, 11, 17, 45, 34, 18, 3, 7];
    let length = tar.len();
    bubblesort(&mut tar, length);
    println!("The sorted array is {:?}", tar);

    let mut another = vec![32, 12, 45, 13, 3, 21];
    let len = another.len();
    selectionsort(&mut another, len);
    println!("The sorted array after selection sort is {:?}", another);
}

fn bubblesort(u: &mut Vec<i32>, b: usize) {
    let mut i = 0;
    while i < b {
        let mut j = i + 1;
        while j < b {
            if u[i] > u[j] {
                let temp = u[i];
                u[i] = u[j];
                u[j] = temp;
            }
            j += 1;
        }
        i += 1;
    }
}

fn selectionsort(u: &mut Vec<i32>, b: usize) {
    for i in 0..b {
        let min = i;
        for j in (i + 1)..b {
            if u[j] < u[i] {
                let temp = u[min];
                u[min] = u[j];
                u[j] = temp;
            }
        }
    }
}
