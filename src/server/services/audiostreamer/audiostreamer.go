package audiostreamer

import (
	"io"
	"log"

	pb "github.com/eupston/gRPC-Audio-Gain-Service/src/proto"
)

type Server struct {
	pb.UnimplementedAudioStreamServer
}

func (s *Server) AudioStream(stream pb.AudioStream_AudioStreamServer) error {
	for {
		in, err := stream.Recv()
		if err == io.EOF {
			return nil
		}
		if err != nil {
			return err
		}

		log.Printf(in.Timestamp)

		if err := stream.Send(in); err != nil {
			return err
		}
	}
}
