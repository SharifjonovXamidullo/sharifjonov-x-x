export function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{">"} About Me</h2>
          <div className="w-20 h-1 bg-green-400"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-900/50 border border-green-400/30 rounded-lg p-6">
            <div className="text-green-400 mb-4">{">"} ./about.sh</div>
            <div className="space-y-4 text-gray-300">
              <p>
                I am currently studying in the Faculty of Cybersecurity, where I'm developing expertise in protecting
                digital assets and understanding threat landscapes.
              </p>
              <p>
                My passion lies in ethical hacking, system protection, and network security. I love learning how to
                defend systems from modern cyber threats and attacks.
              </p>
              <p>
                Every day, I dive deeper into the world of cybersecurity, exploring new vulnerabilities, understanding
                attack vectors, and building robust defenses.
              </p>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-red-400/30 rounded-lg p-6">
            <div className="text-red-400 mb-4">{">"} cat /proc/interests</div>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2">
                <span className="text-red-400">•</span>
                <span>Ethical Hacking & Penetration Testing</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">•</span>
                <span>Network Security & Monitoring</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">•</span>
                <span>System Hardening & Protection</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">•</span>
                <span>Threat Analysis & Response</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-red-400">•</span>
                <span>Security Automation & Scripting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
