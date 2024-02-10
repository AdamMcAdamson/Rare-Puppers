package model

func UserCtxKey() CxtKey {
	return CxtKey("user")
}

type User struct {
	Email string
	Id    int
}
