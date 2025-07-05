const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  technologies: [{
    type: String,
    required: true
  }],
  imageUrl: {
    type: String,
    required: true
  },
  liveUrl: {
    type: String,
    default: null
  },
  githubUrl: {
    type: String,
    default: null
  },
  category: {
    type: String,
    enum: ['general', 'web-development', 'react-development'],
    default: 'general',
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Project', projectSchema); 