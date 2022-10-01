package main

import (
	"fmt"

	"github.com/joho/godotenv"
	"github.com/kuma0328/kyopuroQA/server/db"
)

func main() {
	// envファイル読み込み
	err := godotenv.Load(".env")
	if err != nil {
		fmt.Printf("envファイルが読み込めませんでした:%v", err)
	}
	//db接続
	db := db.NewDB()
	defer db.Conn.Close()

	router := router
}