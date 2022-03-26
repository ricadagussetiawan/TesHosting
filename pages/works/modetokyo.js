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
        </ListItem>
        <ListItem>
          <Meta>New release</Meta>
          <Link href="https://erigostore.co.id/collections/naufal-abshar-t-shirt">
            New Arrival{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>New release</Meta>
           <Link href="https://erigostore.co.id/collections/naufal-abshar-sweatshirt">
            New Arrival{' '}
            <ExternalLinkIcon mx="2px" />
          </Link> 
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
