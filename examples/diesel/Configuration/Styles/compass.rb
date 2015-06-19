# require 'compass/import-once/activate'
# Require any additional compass plugins here.

# require 'compass/import-once'
# Compass::ImportOnce.activate!

# Set this to the root of your project when deployed
http_path = ENV['COMPASS_HTTP_PATH']

# Path to project, starting from css/build
project_path = ENV['COMPASS_PROJECT_PATH'].nil? ? "Content/Styles" : ENV['COMPASS_PROJECT_PATH'].gsub("\\","\/")

# Subdirs, starting from projmect_path
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "javascripts"

# Generated images dir, starting from project_path
generated_images_dir = "generated_images"

# Generated images path on the web server
http_generated_images_path = (environment == :production) ? http_path + "img" : "/Content/Styles/generated_images"

# Output style and line comments
output_style = (environment == :production) ? :compressed : :expanded
line_comments = (environment == :production) ? false : true

# Enable sourcemap in everything but production
sourcemap = (environment == :production) ? false : true