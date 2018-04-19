use Rack::Static,
:urls => ["/img", "/js", "/css","/rs-plugin", "tracks", "/fonts", "/jplayer"],
:root => "public"

run lambda { |env|
[
  200,
  {
    'Content-Type'  => 'text/html',
    'Cache-Control' => 'public, max-age=86400'
  },
  File.open('public/index.html', File::RDONLY)
]
}
