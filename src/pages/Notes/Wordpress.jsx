import React from "react";
import { HiArrowLeft, HiStar, HiOutlineStar } from "react-icons/hi"; 
import List from "./List";

const Wordpress = () => {
    const title = "Install Wordpress in WSL Ubuntu";

    return (
    <div className="bg-[#0F172A] min-h-screen py-12 px-4 sm:px-6 lg:px-8 font-sans text-white">
        <div className="max-w-7xl mx-auto">
            {/* back button */}
            <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 text-lg text-blue-400 hover:text-white transition mb-6"
            >
                <HiArrowLeft size={18} />
                Back
            </button>

            {/* header */}
            <div className="mb-10 space-y-3">
                <h1 className="text-3xl font-bold">
                    {title}
                </h1>
                <p className="text-white/80">
                    Here's how to set up a WordPress project in WSL Ubuntu
                </p>

                <span className="text-white/60 italic">
                    (yeaa because I am forgetful)
                </span>
            </div>

            {/* steps too install */}
            <div className="flex flex-col space-y-10 text-left">

                {/* step 1 */}
                <div className="bg-slate-800 rounded-md p-5">
                    <h2 className="text-xl font-bold mb-2">1. Update Your System</h2>
                    <pre className="text-sm text-white/90">
sudo apt update && sudo apt upgrade -y
                    </pre>
                </div>

                {/* step 2 */}
                <div className="bg-slate-800 rounded-md p-5 space-y-3">
                    <h2 className="text-xl font-bold">2. Install LAMP Stack</h2>

                    <div>
                        <p className="font-semibold">Apache</p>
                        <pre>sudo apt install apache2 -y</pre>
                        <pre>sudo service apache2 start</pre>
                    </div>

                    <div>
                        <p className="font-semibold">MySQL</p>
                        <pre>sudo apt install mysql-server -y</pre>
                        <pre>sudo service mysql start</pre>
                        <pre>sudo mysql_secure_installation</pre>
                    </div>

                    <div>
                        <p className="font-semibold">PHP</p>
                        <pre>sudo apt install php php-mysql php-curl php-gd php-mbstring php-xml php-zip -y</pre>
                    </div>
                </div>

                {/* step 3 */}
                <div className="bg-slate-800 rounded-md p-5">
                    <h2 className="text-xl font-bold mb-2">3. Create MySQL Database</h2>
                    <pre>{`sudo mysql -u root -p

CREATE DATABASE wordpress_db;
CREATE USER 'wp_user'@'localhost' IDENTIFIED BY 'your_password';
GRANT ALL PRIVILEGES ON wordpress_db.* TO 'wp_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;`}</pre>
                </div>

                {/* step 4 */}
                <div className="bg-slate-800 rounded-md p-5">
                    <h2 className="text-xl font-bold mb-2">4. Download & Configure WordPress</h2>
                    <pre className="text-sm text-white/90">
                        cd /var/www/html
                        <br/>
                        sudo wget https://wordpress.org/latest.tar.gz
                        <br/>
                        sudo tar -xzvf latest.tar.gz
                        <br/>
                        sudo chown -R www-data:www-data /var/www/html/wordpress
                        <br/>
                        sudo chmod -R 755 /var/www/html/wordpress
                    </pre>
                </div>

                {/* step 5 */}
                <div className="bg-slate-800 rounded-md p-5">
                    <h2 className="text-xl font-bold mb-2">5. Configure WordPress</h2>
                    <pre className="text-sm text-white/90">
                        cd /var/www/html/wordpress
                        <br/>
                        sudo cp wp-config-sample.php wp-config.php
                        <br/>
                        sudo nano wp-config.php
                    </pre>
                    <span className="font-bold">
                        <pre className="bg-slate-900 p-4 rounded-md overflow-x-auto text-sm text-left">
                            {`define( 'DB_NAME', 'wordpress_db' );
define( 'DB_USER', 'wp_user' );
define( 'DB_PASSWORD', 'your_password' );
define( 'DB_HOST', 'localhost' );`}
                        </pre>
                    </span>
                </div>

                {/* step 6 */}
                <div className="bg-slate-800 rounded-md p-5 space-y-4">
                    <h2 className="text-xl font-bold">
                        6. Configure Apache Virtual Host
                    </h2>

                    <pre className="bg-slate-900 p-4 rounded-md overflow-x-auto text-sm">
{`<VirtualHost *:80>
    DocumentRoot /var/www/html/wordpress
    ServerName localhost

    <Directory /var/www/html/wordpress>
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>`}
                    </pre>
                    Then enable it:
                    <pre>
                        <p>sudo a2ensite wordpress.conf</p>
                        <p>sudo a2enmod rewrite</p>
                        <p>sudo service apache2 restart</p>
                    </pre>
                </div>

                {/* step 7 */}
                <div className="bg-slate-800 rounded-md p-5">
                    <h2 className="text-xl font-bold mb-2">7. Access WordPress</h2>
                    <p>Open: http://localhost/</p>
                    You'll see the WordPress installation wizard. Fill in your site name, admin username, and password.
                </div>

                {/* useful command line */}
                <div className="bg-slate-800 rounded-md p-5">
                    <h2 className="text-xl font-bold mb-2">Useful Service Commands</h2>
                    <pre>
                        <p><span className="font-bold">Manage Apache</span> sudo service apache2 start/stop/restart</p>
                        <p><span className="font-bold">Manage MySQL</span> sudo service mysql start/stop/restart</p>
                        <p><span className="font-bold">Check Apache status</span> sudo service apache2 status</p>
                    </pre>
                </div>

                {/* tips */}
                <div className="bg-slate-800 rounded-md p-5">
                    <h2 className="text-xl font-bold mb-2">Tips</h2>
                    <pre>
                        <p>
                            File editing — files from Windows at \\wsl$\Ubuntu\var\www\html\wordpress in File Explorer.
                        </p>
                        <p>
                            Permissions issue? — Run sudo chown -R $USER:www-data /var/www/html/wordpress
                        </p>
                    </pre>
                </div>

            </div>
        </div>
    </div>
);
};

export default Wordpress;