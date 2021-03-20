package audiostreamer

import (
	pb "github.com/eupston/gRPC-Audio-Gain-Service/src/proto"
	"io"
	"log"
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

		bytearr := make([]byte, len(in.Data))
		for i, samplebyte := range in.Data {
			log.Println("samplebyte ", samplebyte)
			sampleint := int(samplebyte) * 2
			bytearr[i] = byte(sampleint)
		}
		//in.Data = bytearr
		if err := stream.Send(in); err != nil {
			return err
		}
	}
}
