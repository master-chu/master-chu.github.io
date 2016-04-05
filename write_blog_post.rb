require "firebase_token_generator"
require "firebase"

def write_blog_post
  firebase = Firebase::Client.new('https://master-chu.firebaseio.com/blog/')

  data = { :title => 'Das ist gut', :body => 'test post pls ignore' }
  options = { :auth => admin_token }
  response = firebase.push("posts", data, options)

  print_response(response)
end

def print_response(response)
  if response.success?
    puts "Blog post successfully written!"
  else
    puts "Blog post failed: Error code #{response.code}"
  end
  puts response.body
end

def admin_token
  payload = {:uid => "1", :auth_data => "foo", :other_auth_data => "bar"}
  options = {:admin => true}

  generator = Firebase::FirebaseTokenGenerator.new(secret)
  token = generator.create_token(payload, options)

  token
end

def secret
  IO.readlines("./secret")[0]
end

write_blog_post()