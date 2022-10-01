package db

import (
	"fmt"
	"os"
	"time"

	"github.com/kuma0328/kyopuroQA/server/model"

	"github.com/jinzhu/gorm"
	_ "github.com/lib/pq"
)

func NewDB() DB {
	// DBの環境変数
	host := os.Getenv("POSTGRES_HOST")
	port := os.Getenv("POSTGRES_PORT")
	username := os.Getenv("POSTGRES_USER")
	password := os.Getenv("POSTGRES_PASSWORD")
	dbName := os.Getenv("POSTGRES_DBNAME")

	return newDB(DB{
		Host:     host,
		Port:     port,
		Username: username,
		Password: password,
		DBName:   dbName,
	})
}

func newDB(d DB) DB {
	// DB接続情報 local
	connInfo := fmt.Sprintf(
		"user=%s password=%s host=%s port=%s dbname=%s",
		d.Username,
		d.Password,
		d.Host,
		d.Port,
		d.DBName,
	)

	fmt.Println(connInfo)
	// deploy
	if os.Getenv("DEPLOY_FLAG") == "True" {
		connInfo = os.Getenv("DATABASE_URL")
	}

	db, err := gorm.Open("postgres", connInfo)

	//30回接続を試みる
	for i := 0; i < 30 && err != nil; i++ {
		fmt.Println(err)
		fmt.Printf("db connect failed...\n\n")
		time.Sleep(time.Second * 1)
		db, err = gorm.Open("postgres", connInfo)
	}

	// うまく接続できなかった場合
	if err != nil {
		panic("db connect failed...\n\nexit\n")
	}

	d.Conn = db
	return d
}

func (db *DB) Begin() *gorm.DB {
	return db.Conn.Begin()
}

func (db *DB) Connect() *gorm.DB {
	return db.Conn
}