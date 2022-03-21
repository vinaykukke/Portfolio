// Runs once for every pixel/fragment with a given object
uniform vec3 color;
uniform sampler2D pointTexture;
uniform float alphaTest;

varying vec2 vertexUV;

void main() {
  gl_FragColor = texture2D( pointTexture, vertexUV );
}