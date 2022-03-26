import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  SimpleGrid
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="mode.tokyo">
    <Container>
      <Title>
        mode.tokyo <Badge>2016</Badge>
      </Title>
      <P>Majalah fashion untuk pemahaman menikmati Indonesia secara pribadi.</P>
      <P>
        Ini adalah salah satu proyek yang diluncurkan di{' '}
        <Link href="https://erigostore.co.id/" target="_blank">
          Open Innovation Lab <ExternalLinkIcon mx="2px" />
        </Link>
        , bertujuan untuk memvisualisasikan dampak konten media pada kunjungan
         kelas kecerdasan tinggi asing ke Jepang, yang sangat tertarik pada
         Budaya Jepang. Saya bergabung dengan proyek untuk membangun aplikasi selulernya untuk iOS dan Android
         di mana Anda dapat membaca artikel majalah gratis.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>iOS / Android</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Swift</span>
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          {/* <Link href="https://www.isid.co.jp/english/news/release/2015/pdf/20150930_ModeTokyo.pdf">
            ISID Starts a Research Project to Visualize Impact of Media Contents
            on Visit of Foreign High-Intellect Class to Japan{' '}
            <ExternalLinkIcon mx="2px" />
          </Link> */}
        </ListItem>
        <ListItem>
          <Meta>Press release</Meta>
          {/* <Link href="https://innolab.jp/news/achievement/335">
            メディアコンテンツが訪日行動に与える影響を可視化する研究プロジェクトを始動{' '}
            <ExternalLinkIcon mx="2px" />
          </Link> */}
        </ListItem>
      </List>

      <WorkImage src="/images/works/modetokyo_eyecatch.png" alt="mode.tokyo" />
      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/modetokyo_01.png" alt="mode.tokyo" />
        <WorkImage src="/images/works/modetokyo_02.png" alt="mode.tokyo" />
      </SimpleGrid>
      <WorkImage src="/images/works/modetokyo_03.jpg" alt="mode.tokyo" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
