require 'webrick'
include WEBrick

local_magia = HTTPServer.new(
  :Port => 8080,
  :DocumentRoot => "."
)

local_magia.start
