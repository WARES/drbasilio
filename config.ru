use Rack::Static,
  :urls => ["/images", "/js", "/css", "/jplayer" ,"/fonts", "/rs-plugin" ,"/less" , "/jplayer" ,"/lightGallery"],
  :root => "public",
  :index => "index.html",
  :header_rules => [
    [:all, {'Cache-Control' => 'public, max-age=86400'}]
  ]

run lambda{ |env| [ 404, { 'Content-Type'  => 'text/html' }, ['404 - page not found'] ] }
