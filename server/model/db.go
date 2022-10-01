package model

import "github.com/jinzhu/gorm"

type DB struct {
	Host string
	Port string
	Username string
	Password string
	DBName string
	Conn *gorm.DB
}