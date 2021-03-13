package audiostreamer

import (
	"io"
	"log"
	"golang.org/x/net/context"
)

//TODO flesh out entirely
func (s *AudioStreamServer) AudioStream(stream pb..) error {
	in, err := stream.Recv()
	if err == io.EOF {
		return nil
	}
	if err != nil {
		return err
	}
	key := serialize(in.Location)
	// look for AudioSample to be sent to client
	for _, audiosample := range s.AudioSample[key] {
		if sample := stream.Send(audiosample); sample != nil {
			return sample
		}
	}
}

}