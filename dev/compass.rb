require 'sass-css-importer'

# Store name -- sudirectory
#yoox_os_name = "ytos"

# Set this to the root of your project when deployed

http_path = ENV['COMPASS_HTTP_PATH']

# Path to project, starting from css/build
project_path = ENV['COMPASS_PROJECT_PATH'].nil? ? "styles" : ENV['COMPASS_PROJECT_PATH'].gsub("\\","\/")

# Subdirs, starting from projmect_path
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"

# Generated images dir, starting from project_path
generated_images_dir = "generated_images"

# Generated images path on the web server
http_generated_images_path = (environment == :production) ? http_path + "img" : "/styles/generated_images"

# Output style and line comments
output_style = (environment == :production) ? :compressed : :expanded
line_comments = false #(environment == :production) ? false : true

relative_assets = false

# Add a function to read compass option
module Sass::Script::Functions
	def get_compass_option(name)
		Sass::Script::String.new(Compass.configuration.instance_eval(name.to_s))
	end
end