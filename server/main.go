package main

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"github.com/kuma0328/kyopuroQA/server/db"
	"github.com/kuma0328/kyopuroQA/server/handler/router"
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

	// router設定
	router := router.InitRouter(db)

	port := os.Getenv("PORT")
	
	// server running
	router.Run(fmt.Sprintf(":%s", port))
}