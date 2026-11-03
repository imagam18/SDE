package config

import (
	"flag"
	"os"
)

type HTTPServer struct {
	Addr string `yaml:"address"`
}

// env-default:"production"
type Config struct {
	Env         string `yaml:"env" env:"ENV" env-required:"true"`
	StoragePath string `yaml:"storage_path" env-required:"true"`
	HTTPServer  `yaml:"http_server"`
}

func MustLoad() *Config {
	var configPath string
	configPath = os.Getenv("CONFIG_PATH")
	if configPath == "" {
		flag := flag.String("config", "config.yaml", "Path to config file")
		flag.Parse()
		configPath = *flag

	if configPath == "" {
		log.Fatal("config path is not provided")
	}

	if _,err := os.Stat(configPath); os.IsNotExist(err) {
		log.Fatalf("config file does not exist: %s", configPath)
	}
	var cfg Config
	err := cleanenv.ReadConfig(configPath, &cfg)
	if err != nil {
		log.Fatalf("failed to read config file: %s", err.Error())
	}
	return &cfg
}
