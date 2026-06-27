function Github() {
  return (
    <section className="github" id="github">
      <h2>GitHub Statistics</h2>

      <div className="github-stats">
        <img
          src="https://github-readme-stats.vercel.app/api?username=jangrajatin&show_icons=true&theme=tokyonight"
          alt="GitHub Stats"
        />

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=jangrajatin&layout=compact&theme=tokyonight"
          alt="Top Languages"
        />
      </div>
    </section>
  );
}

export default Github;