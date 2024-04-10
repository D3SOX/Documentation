import { defineConfig } from "vitepress";
import type { Config as ThemeConfig } from "@vue/theme";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MCSManager",
  description: "MCSManager Document",
  locales: {
    root: {
      label: "English",
      lang: "en",
      link: "/",
    },
    zh_cn: {
      label: "简体中文",
      lang: "zh",
      link: "/zh_cn/",
    },
  },
  themeConfig: {
    logo: "/images/logo.png",
    sidebar: {
      ["/"]: [
        {
          text: "Basic Usage",
          link: "/",
          collapsed: false,
          items: [
            { text: "Quick start", link: "/quick_start.md" },
            {
              text: "Minecraft Server",
              collapsed: false,
              items: [
                { text: "Dependencies", link: "/setup_package" },
                { text: "Java Edition", link: "/setup_java_edition" },
                { text: "Bedrock Edition", link: "/setup_bedrock_edition" },
              ],
            },
            {
              text: "Docker Image",
              link: "/setup_docker_image.md",
            },
            {
              text: "Steam Game Server",
              link: "/setup_steam.md",
            },
            {
              text: "Other Use Cases",
              link: "/setup_any_software.md",
            },
          ],
        },
        {
          text: "Advanced",
          collapsed: false,
          items: [
            {
              text: "Upgrade & Reset",
              link: "/advanced/update_panel.md",
            },
            {
              text: "Upgrade from 9.x",
              link: "/ops/from_v9.md",
            },
            {
              text: "Distributed Deployment",
              link: "/advanced/distributed.md",
            },
            {
              text: "Isolated Environment",
              link: "/advanced/docker.md",
            },
            {
              text: "Systemd Service",
              link: "/advanced/linux_systemctl.md",
            },
          ],
        },
        {
          text: "Operations",
          items: [
            {
              text: "Data & Configuration",
              link: "/ops/config_files.md",
            },
            {
              text: "Network Architecture",
              link: "/ops/mcsm_network.md",
            },
            {
              text: "HTTPS Reverse Proxy",
              link: "/ops/reverse_proxy.md",
            },
            {
              text: "Cloudflare CDN",
              link: "/ops/cloudflare.md",
            },
          ],
        },
        {
          text: "Development",
          collapsed: true,
          items: [
            {
              text: "Customize HTML Card",
              link: "/apis/html_card.md",
            },
            {
              text: "Obtain API Key",
              link: "/apis/get_apikey.md",
            },
            {
              text: "API Usage - User",
              link: "/apis/api_users.md",
            },
            {
              text: "API Usage - Instance",
              link: "/apis/api_instance.md",
            },
          ],
        },
      ],
      ["/zh_cn/"]: [
        {
          text: "教程",
          items: [
            {
              text: "快速开始",
              link: "/zh_cn/quick_start.md",
            },
            {
              text: "搭建 Minecraft 游戏服务器",
              collapsed: true,
              items: [
                {
                  text: "一键搭建 Java 版",
                  link: "/zh_cn/setup_package.md",
                },
                {
                  text: "搭建 Java 版",
                  link: "/zh_cn/setup_java_edition.md",
                },
                {
                  text: "搭建基岩版",
                  link: "/zh_cn/setup_bedrock_edition.md",
                },
              ],
            },
            {
              text: "使用 Docker 部署游戏服务器",
              link: "/zh_cn/setup_docker_image.md",
            },
            {
              text: "搭建 Steam 游戏服务器",
              link: "/zh_cn/setup_steam.md",
            },
            {
              text: "其他使用场景",
              link: "/zh_cn/setup_any_software.md",
            },
          ],
        },
        {
          text: "高级",
          items: [
            {
              text: "Docker CLI 部署",
              link: "/zh_cn/docker-cli.md",
            },
            {
              text: "更新与重置",
              link: "/zh_cn/advanced/update_panel.md",
            },
            {
              text: "从 9.X 版本升级",
              link: "/zh_cn/ops/from_v9.md",
            },
            {
              text: "分布式",
              link: "/zh_cn/advanced/distributed.md",
            },
            {
              text: "环境隔离",
              link: "/zh_cn/advanced/docker.md",
            },
            {
              text: "系统服务",
              link: "/zh_cn/advanced/linux_systemctl.md",
            },
          ],
        },
        {
          text: "运维",
          items: [
            {
              text: "数据与配置",
              link: "/zh_cn/ops/config_files.md",
            },
            {
              text: "网络架构",
              link: "/zh_cn/ops/mcsm_network.md",
            },
            {
              text: "使用 HTTPS",
              link: "/zh_cn/ops/proxy_https.md",
            },
            {
              text: "使用 CloudFlare CDN",
              link: "/zh_cn/ops/cloudflare.md",
            },
          ],
        },
        {
          text: "开发",
          items: [
            { text: "制作卡片组件", link: "/zh_cn/apis/html_card.md" },
            { text: "获取 APIKEY", link: "/zh_cn/apis/get_apikey.md" },
            { text: "API 接口参考 - 用户", link: "/zh_cn/apis/api_users.html" },
            {
              text: "API 接口参考 - 实例",
              link: "/zh_cn/apis/api_instance.html",
            },
          ],
        },
      ],
    },
    nav: [
      {
        text: "Official website",
        link: "https://mcsmanager.com/",
      },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/MCSManager/MCSManager" },
    ],
  },
});
