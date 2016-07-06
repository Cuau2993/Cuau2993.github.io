json.array!(@votos) do |voto|
  json.extract! voto, :id, :heroe, :email
  json.url voto_url(voto, format: :json)
end
