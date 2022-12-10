set check_function_bodies = false;

create table users(
  id char(20) not null,
  username char(20) not null,
  email char(50) not null,
  "password" char(30) not null,
  "name" char(50) not null,
  address jsonb,
  constraint users_pkey primary key(id)
);

create table products(
  id char(20) not null,
  shops_id char(20) not null,
  "name" char(100) not null,
  description char(250),
  image jsonb,
  price integer,
  remaining_stock integer,
  classify jsonb,
  rating float4,
  constraint products_pkey primary key(id)
);

create table orders(
  id char(20) not null,
  shops_id char(20) not null,
  users_id char(20) not null,
  order_time timestamp,
  status integer,
  total integer,
  address jsonb,
  constraint orders_pkey primary key(id)
);

create table order_detail(
  orders_id char(20) not null,
  products_id char(20) not null,
  classify jsonb not null,
  unit_price integer,
  amount integer,
  constraint order_detail_pkey primary key(classify, orders_id, products_id)
);

create table shops(
  id char(20) not null,
  users_id char(20) not null,
  "name" char(100),
  status integer,
  image char(256),
  rating float4,
  constraint shops_pkey primary key(id)
);

create table conversations(
  id char(20) not null,
  shops_id char(20) not null,
  users_id char(20) not null,
  create_at timestamp,
  update_at timestamp,
  constraint conversations_pkey primary key(id)
);

create table messages(
  conversations_id char(20) not null,
  create_at timestamp not null,
  "type" integer not null,
  message char(200),
  constraint messages_pkey primary key(create_at, conversations_id)
);

create table rating(
  users_id char(20) not null,
  orders_id char(20) not null,
  products_id char(20) not null,
  vote integer,
  "comment" char(250),
  constraint rating_pkey primary key(users_id, orders_id, products_id)
);

create table carts(
  users_id char(20) not null,
  products_id char(20) not null,
  classify jsonb not null,
  amount integer,
  constraint carts_pkey primary key(classify, users_id, products_id)
);

alter table conversations
  add constraint conversations_users_id_fkey
    foreign key (users_id) references users (id);

alter table conversations
  add constraint conversations_shops_id_fkey
    foreign key (shops_id) references shops (id);

alter table messages
  add constraint messages_conversations_id_fkey
    foreign key (conversations_id) references conversations (id);

alter table shops
  add constraint shops_users_id_fkey foreign key (users_id) references users (id)
  ;

alter table carts
  add constraint carts_users_id_fkey foreign key (users_id) references users (id)
  ;

alter table carts
  add constraint carts_products_id_fkey
    foreign key (products_id) references products (id);

alter table orders
  add constraint orders_users_id_fkey foreign key (users_id) references users (id)
  ;

alter table rating
  add constraint rating_users_id_fkey foreign key (users_id) references users (id)
  ;

alter table orders
  add constraint orders_shops_id_fkey foreign key (shops_id) references shops (id)
  ;

alter table products
  add constraint products_shops_id_fkey
    foreign key (shops_id) references shops (id);

alter table order_detail
  add constraint order_detail_products_id_fkey
    foreign key (products_id) references products (id);

alter table order_detail
  add constraint order_detail_orders_id_fkey
    foreign key (orders_id) references orders (id);

alter table rating
  add constraint rating_products_id_fkey
    foreign key (products_id) references products (id);

alter table rating
  add constraint rating_orders_id_fkey
    foreign key (orders_id) references orders (id);
