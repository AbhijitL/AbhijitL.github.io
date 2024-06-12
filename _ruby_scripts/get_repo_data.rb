# Author: Leihaorambam Abhijit Singh, Created: 02-06-2024

require 'json'
require 'net/http'
require 'uri'
require 'date'

CRED = ARGV
VALID_LANGUAGES = ["C++", "C", "Ruby", "Python", "JavaScript", 
                  "GDScript", "Dart", "Kotlin", "Java",
                  "C#"]
SAVE_LOCATION = "../assets/jsons/gitLangData.json"

$github_user = ""
$github_token = ""

def get_user_repos()
    uri = URI.parse("https://api.github.com/user/repos?")
    request = Net::HTTP::Get.new(uri)
    request.basic_auth($github_user, $github_token)
    req_options = {
        use_ssl: uri.scheme == "https",
    }

    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
        http.request(request)
    end

    result = JSON.parse(response.body)
    return result
end

def get_repo_languages(repo_name)
    uri = URI.parse("https://api.github.com/repos/#{$github_user}/#{repo_name}/languages")
    request = Net::HTTP::Get.new(uri)
    request["Authorization"] = "Bearer #{$github_token}"
    request["X-Github-Api-Version"] = "2022-11-28"

    req_options = {
      use_ssl: uri.scheme == "https",
    }
    response = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
      http.request(request)
    #   puts req.code
    end
    result = JSON.parse(response.body)
    return result
end

def get_user_repo_names()
  repo_names = []
  repos = get_user_repos()
  repos.each do |repo|
    # remove the code if you want to include forked projects also
    if repo["fork"] == true
      next
    end
    repo_names.append(repo["name"])
  end
  return repo_names
end

def get_user_languages()
  users_lang_data = {}
  repos = get_user_repo_names()
  repos.each do |repo|
    print "#{repo} : "
    data = get_repo_languages(repo)
    puts data
    data.each do |language, bytes|
      if not VALID_LANGUAGES.include?(language)
        next
      end
      if not users_lang_data.include?(language)
        users_lang_data[language] = 0
      end
      users_lang_data[language] += bytes
    end
  end
  # puts users_lang_data
  return users_lang_data
end

# main

if CRED.empty? or CRED.length > 3
  puts "Arguments are empty!! or required two arguments"
  puts "<user> <token>"
  raise "Invalid arguments!"
end

puts "\nGet #{CRED[0]}'s repos data including private repos"
puts "Initializing"
i = 0
CRED.each do |data|
  if i == 0
    $github_user = data
  else
    if data.length > 93 or data.length < 93
      raise "Invalid Token!!"
    end
    $github_token = data
  end
  i += 1
end
puts "Getting Data..."
data =  get_user_languages()
date = DateTime.now
data["created"] = date.strftime("%d/%m/%Y")
puts "Writing to JSON.."
File.open(SAVE_LOCATION, 'w') do |f|
  f.write( JSON.pretty_generate(data))
end
puts "Json file saved at #{SAVE_LOCATION}"
puts "Operation Completed"