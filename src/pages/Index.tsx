import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const products = [
  {
    id: 1,
    name: 'Oticon Zircon 1 miniRITE T',
    brand: 'Oticon',
    type: 'miniRITE T',
    price: '45 000',
    image: 'https://cdn.poehali.dev/projects/7a571715-de1c-4123-b31f-169cd3abdbf2/files/5c5fe5dc-628b-4fb0-aedc-9fce8106f143.jpg',
    features: ['Bluetooth', 'Аккумуляторный', 'Защита IP68']
  },
  {
    id: 2,
    name: 'Oticon Xceed 3 BTE SP',
    brand: 'Oticon',
    type: 'BTE SP',
    price: '78 000',
    image: 'https://cdn.poehali.dev/projects/7a571715-de1c-4123-b31f-169cd3abdbf2/files/5c5fe5dc-628b-4fb0-aedc-9fce8106f143.jpg',
    features: ['Мощный усилитель', 'Шумоподавление', 'Батарейки 13']
  },
  {
    id: 3,
    name: 'ReSound KEY KE277-DWH',
    brand: 'ReSound',
    type: 'KE277-DWH',
    price: '35 000',
    image: 'https://cdn.poehali.dev/projects/7a571715-de1c-4123-b31f-169cd3abdbf2/files/5c5fe5dc-628b-4fb0-aedc-9fce8106f143.jpg',
    features: ['Доступная цена', 'Надежность', 'Простота использования']
  },
  {
    id: 4,
    name: 'Oticon Ruby 2 BTE PP 13',
    brand: 'Oticon',
    type: 'BTE PP 13',
    price: '52 000',
    image: 'https://cdn.poehali.dev/projects/7a571715-de1c-4123-b31f-169cd3abdbf2/files/5c5fe5dc-628b-4fb0-aedc-9fce8106f143.jpg',
    features: ['Супермощный', 'Надежная связь', 'Батарейки 13']
  },
  {
    id: 5,
    name: 'Phonak Audeo P50-312',
    brand: 'Phonak',
    type: 'Audeo P50-312',
    price: '62 000',
    image: 'https://cdn.poehali.dev/projects/7a571715-de1c-4123-b31f-169cd3abdbf2/files/5c5fe5dc-628b-4fb0-aedc-9fce8106f143.jpg',
    features: ['Премиум качество', 'Автофокус', 'Батарейки 312']
  }
];

const articles = [
  {
    id: 1,
    title: 'Как выбрать слуховой аппарат',
    excerpt: 'Полное руководство по подбору слухового аппарата для разных типов потери слуха',
    image: 'https://cdn.poehali.dev/projects/7a571715-de1c-4123-b31f-169cd3abdbf2/files/dd4de05c-e17a-4443-a40b-70cb5a42388a.jpg'
  },
  {
    id: 2,
    title: 'Уход за слуховыми аппаратами',
    excerpt: 'Советы по правильному уходу и обслуживанию вашего устройства',
    image: 'https://cdn.poehali.dev/projects/7a571715-de1c-4123-b31f-169cd3abdbf2/files/5c5fe5dc-628b-4fb0-aedc-9fce8106f143.jpg'
  },
  {
    id: 3,
    title: 'Жизнь с аппаратом: истории клиентов',
    excerpt: 'Реальные истории людей, которые вернули себе полноценный слух',
    image: 'https://cdn.poehali.dev/projects/7a571715-de1c-4123-b31f-169cd3abdbf2/files/69ee318c-2cd9-4bc0-a006-58661f44ab5b.jpg'
  }
];

const services = [
  {
    icon: 'Stethoscope',
    title: 'Диагностика слуха',
    description: 'Полное обследование на современном оборудовании'
  },
  {
    icon: 'Settings',
    title: 'Настройка аппаратов',
    description: 'Индивидуальная настройка под ваши потребности'
  },
  {
    icon: 'HeartHandshake',
    title: 'Бесплатный тест-драйв',
    description: 'Попробуйте аппарат перед покупкой'
  },
  {
    icon: 'Wrench',
    title: 'Обслуживание',
    description: 'Регулярная чистка и профилактика'
  }
];

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <img 
                src="https://cdn.poehali.dev/files/5f74e89d-aead-41cf-ae1d-6fc03ace56b4.png" 
                alt="Ясный слух" 
                className="h-12 w-12"
              />
              <span className="text-xl font-bold text-primary">Ясный слух</span>
            </div>
            
            <div className="hidden md:flex gap-6">
              {[
                { id: 'home', label: 'Главная' },
                { id: 'catalog', label: 'Каталог' },
                { id: 'articles', label: 'Статьи' },
                { id: 'services', label: 'Услуги' },
                { id: 'about', label: 'О нас' }
              ].map(item => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveSection(item.id);
                    document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === item.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            <Button size="sm" className="hidden md:inline-flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Позвонить
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
                Вернём вам радость общения
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Профессиональный подбор и настройка слуховых аппаратов. 
                Современное оборудование и индивидуальный подход к каждому клиенту.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="text-base">
                  Записаться на прием
                </Button>
                <Button size="lg" variant="outline" className="text-base">
                  Бесплатная консультация
                </Button>
              </div>
            </div>
            
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/7a571715-de1c-4123-b31f-169cd3abdbf2/files/dd4de05c-e17a-4443-a40b-70cb5a42388a.jpg"
                alt="Консультация специалиста"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: 'Award', title: '15+ лет опыта', text: 'Работаем с 2009 года' },
              { icon: 'Users', title: '5000+ клиентов', text: 'Довольных клиентов' },
              { icon: 'Shield', title: 'Гарантия качества', text: 'На все услуги и товары' }
            ].map((item, index) => (
              <Card key={index} className="text-center border-2 hover:border-primary transition-all hover:shadow-lg animate-fade-in">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={item.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Каталог слуховых аппаратов</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор современных устройств от ведущих мировых производителей
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all animate-fade-in hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-square overflow-hidden bg-secondary">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-primary font-medium mb-1">{product.brand}</div>
                  <CardTitle className="text-xl">{product.name}</CardTitle>
                  <CardDescription>{product.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-primary" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-3xl font-bold text-foreground">{product.price} ₽</div>
                </CardContent>
                <CardFooter className="gap-2">
                  <Button className="flex-1">Подробнее</Button>
                  <Button variant="outline" size="icon">
                    <Icon name="Heart" size={20} />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг для вашего комфорта
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Icon name={service.icon} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="articles" className="py-20 px-4 bg-secondary/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Полезные статьи</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Всё, что нужно знать о слуховых аппаратах
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {articles.map((article, index) => (
              <Card key={article.id} className="overflow-hidden hover:shadow-xl transition-all animate-fade-in cursor-pointer hover:-translate-y-1" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl hover:text-primary transition-colors">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="group">
                    Читать далее
                    <Icon name="ArrowRight" size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/7a571715-de1c-4123-b31f-169cd3abdbf2/files/69ee318c-2cd9-4bc0-a006-58661f44ab5b.jpg"
                alt="Довольные клиенты"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>

            <div className="animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">О нашем центре</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Центр слуховых аппаратов "Ясный слух" работает с 2009 года. 
                Мы помогли более 5000 людям вернуть радость полноценного общения.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Наши специалисты регулярно проходят обучение и сертификацию у ведущих 
                мировых производителей слуховых аппаратов.
              </p>
              <div className="space-y-4">
                {[
                  'Индивидуальный подход к каждому клиенту',
                  'Современное диагностическое оборудование',
                  'Гарантия качества на все услуги',
                  'Постпродажное обслуживание'
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Check" size={20} className="text-primary" />
                    </div>
                    <span className="text-foreground font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Запишитесь на бесплатную консультацию</h2>
          <p className="text-lg mb-8 opacity-90">Мы ответим на все ваши вопросы и поможем подобрать идеальное решение</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary" className="text-base">
              <Icon name="Phone" size={20} className="mr-2" />
              +7 (999) 123-45-67
            </Button>
            <Button size="lg" variant="outline" className="text-base bg-transparent border-white text-white hover:bg-white hover:text-primary">
              <Icon name="Mail" size={20} className="mr-2" />
              info@yasniysluh.ru
            </Button>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 border-t border-border">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>&copy; 2024 Ясный слух. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
}
