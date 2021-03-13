package main

import (
	"log"
	"net"

	"google.golang.org/grpc"
)

func main(){
	PORT := 9000
	lis, err := net.Listen("tcp", ":" + string(PORT))
	if err != nil{
		log.Fatalf("Failed to listen on port " + string(PORT))
	}

	grpcServer := grpc.NewServer()

	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("failed to serve grpc services over port " + string(PORT))
	}
}