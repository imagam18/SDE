package main

import (
	"fmt"
	"time"
)

func main() {
	switch time.Now().Weekday() {
	case time.Wednesday, time.Monday:
		fmt.Println("Weekend")
	case time.Tuesday, time.Saturday:
		fmt.Println("Hanuman Ji")
	}

	Whoami := func(i interface{}) {
		switch t := i.(type) {
		case int:
			fmt.Println("It is Integer")
		case bool:
			fmt.Println("It is Bool")
		case string:
			fmt.Println("It is String")
		default:
			fmt.Println("Others")
			_ = t
		}
	}
	Whoami(5456)
	// declrtion Array
	var nums [4]int

	nums[0] = 1

	fmt.Println(nums)

	var num = make([]int, 2)

	fmt.Println(num)

}
