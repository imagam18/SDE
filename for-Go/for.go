package main

import "fmt"

type payment struct{}

func (p payment) makePayment(amount float32) {
	razorpay := razorpay{}
	razorpay.pay(amount)
}

type razorpay struct {
}

func (r razorpay) pay(amount float32) {
	fmt.Println("Payment of", amount, "made using Razorpay")
}
func main() {
	payment := payment{}
	payment.makePayment(100.0)
}
