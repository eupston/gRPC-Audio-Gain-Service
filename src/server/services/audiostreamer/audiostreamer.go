package audiostreamer

import (
	"bytes"
	"encoding/binary"
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

		log.Print(string(in.Data))
		buf := bytes.NewReader(in.Data)
		var i int16
		_ = binary.Read(buf, binary.BigEndian, &i)

		log.Printf(in.Timestamp)
		if err := stream.Send(in); err != nil {
			return err
		}
	}
}
