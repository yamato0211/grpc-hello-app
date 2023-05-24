FROM golang:1.19

ENV GO111MODULE=on

WORKDIR /go/src/hello-grpc-web/server
COPY . .
RUN go install 
CMD [ "go", "run", "main.go" ]
EXPOSE 9090
