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

}
