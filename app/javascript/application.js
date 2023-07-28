// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"


const akashAI = require('akashai');

akashAI.models.get('stable-diffusion').then(model => {
    model.predict("origami style, an astronaut riding a horse, studio lighting, white background, pastel colors")
});
