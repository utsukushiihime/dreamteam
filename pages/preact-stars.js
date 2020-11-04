import Link from 'next/link'

function PreactStars({ stars, watchers }) {
  return (
    <div>
      <p>Preact has {stars} ⭐</p>
      <p>Preact has {watchers} watchers</p>
      <Link href="/">
        <a>I bet Next.js has more stars (?)</a>
      </Link>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://api.github.com/repos/developit/preact')
  const json = await res.json()

  return {
    props: {
      stars: json.stargazers_count,
      watchers: json.watchers_count,
    },
  }
}

export default PreactStars